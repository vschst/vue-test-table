<template>
    <div class="select-dropdown">
        <button class="select-dropdown__button colors__background_white fonts__roboto_regular colors__font_gray-d" @click="toggle">
            {{ selectedText }}<img src="/static/images/icons/arrow_down.svg" alt="down icon" class="select-dropdown__button_icon"/>
        </button>
        <transition name="fade" mode="out-in">
            <div
                    v-if="show"
                    class="select-dropdown__options colors__background_white fonts__roboto_regular"
                    @mouseover="toggleActive(true)"
                    @mouseleave="toggleActive(false)"
                    v-click-outside="close"
            >
                <div class="select-dropdown__options_option fonts__roboto_bold" @click="removeSelection">{{ placeholder }}</div>
                <div v-for="(option, index) in options" :key="index" class="select-dropdown__options_option" @click="selectOption(option)">{{ option }}</div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'SelectDropdown',
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            selected: null,
            show: false,
            active: false
        }
    },
    computed: {
        selectedText() {
            return (this.selected !== null) ? this.selected : this.placeholder
        }
    },
    methods: {
        removeSelection() {
          this.selected = null
          this.$emit('onSelectionRemoved')
        },
        selectOption(option) {
            this.selected = option
            this.$emit('onSelectedOption', option)
        },
        toggle(e) {
          e.stopPropagation()

          if (this.active) {
              return
          }

          this.show = !this.show
        },
        toggleActive (state) {
            this.active = !!state
        },
        close () {
            if (this.show && !this.active) {
                this.show = false
            }
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../../assets/style/base/grid';
    @import '../../assets/style/base/colors';
    .select-dropdown {
        position: relative;
        display: inline-block;

        &__button {
            width: nonScalePx(386);
            height: nonScalePx(57);
            border: none;
            text-align: left;
            text-decoration: none;
            padding-left: nonScalePx(30);
            cursor: pointer;

            &_icon {
                position: absolute;
                width: nonScalePx(20);
                height: nonScalePx(20);
                right: nonScalePx(20);
            }
        }

        &__options {
            position: absolute;
            top: nonScalePx(60);
            width: nonScalePx(386);
            display: flex;
            flex-direction: column;
            box-shadow: 0 nonScalePx(2) nonScalePx(24) rgba(0, 0, 0, 0.1);
            padding: nonScalePx(10);
            cursor: pointer;
            z-index: 99;

            &_option {
                padding-left: nonScalePx(15);
                padding-top: nonScalePx(10);
                padding-bottom: nonScalePx(10);
                margin-bottom: nonScalePx(5);

                &:last-child {
                    margin-bottom: 0;
                }

                &:hover {
                    background-color: $gray-l;
                }
            }
        }

        @media (max-width: $desktop-break-point) {
            &__button {
                width: pxToVwDesktop(386);
                height: pxToVwDesktop(57);
                padding-left: pxToVwDesktop(30);

                &_icon {
                    width: pxToVwDesktop(20);
                    height: pxToVwDesktop(20);
                    right: pxToVwDesktop(20);
                }
            }

            &__options {
                top: pxToVwDesktop(60);
                width: pxToVwDesktop(386);
                box-shadow: 0 pxToVwDesktop(2) pxToVwDesktop(24) rgba(0, 0, 0, 0.1);
                padding: pxToVwDesktop(15);

                &_option {
                    padding-left: pxToVwDesktop(15);
                    padding-top: pxToVwDesktop(10);
                    padding-bottom: pxToVwDesktop(10);
                    margin-bottom: pxToVwDesktop(5);
                }
            }
        }
    }
</style>