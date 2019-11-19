<template>
    <div>
        <ul class="tabs clearfix" :class="orientation">
            <FilesTabItem
                    v-for="tab in tabs"
                    :tab="tab"
                    :class="{active: active === tab}"
                    @click="active = $event"
            />
        </ul>
    </div>
</template>

<script>
import FilesTabItem from "./FilesTabItem.vue";

export default {
    components: {FilesTabItem},
    data() {
        return {
            active: null,
            tabs: [
                {label: 'Fichier 1'},
                {label: 'Fichier 2'},
                {label: 'Fichier 3'},
                {label: 'Fichier 4'},
                {label: 'entry.php'},
                {label: 'main.php'},
                {label: 'index.html'},
            ]
        };
    },
    props: {
        orientation: String
    }
};
</script>

<style lang="scss">
$inactive-color: #bdbdbd;
$active-color: #efefef;
$hover-color: #ddd;

ul.tabs {
    font: .8em sans-serif;
    margin: 0;
    list-style-type: none;
    line-height: 35px;
    max-height: 35px;
    overflow: hidden;
    display: inline-block;
    padding-right: 20px;

    & > li {
        float: left;
        margin: 5px -10px 0;
        border-top-right-radius: 25px 170px;
        border-top-left-radius: 20px 90px;
        padding: 0 30px 0 25px;
        height: 170px;
        background: $inactive-color;
        position: relative;
        box-shadow: 0 10px 20px rgba(0, 0, 0, .5);
        max-width: 200px;
        cursor: pointer;
        z-index: 2;

        &:hover {
            background: $hover-color;

            &:before {
                border-color: transparent $hover-color transparent transparent;
            }

            &:after {
                border-color: transparent transparent transparent $hover-color;
            }
        }

        &.active {
            z-index: 3;
            background: $active-color;

            &:before {
                border-color: transparent $active-color transparent transparent;
            }

            &:after {
                border-color: transparent transparent transparent $active-color;
            }
        }


        & > a {
            display: inline-block;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            text-decoration: none;
            color: #222;
        }

        &:before, &:after {
            content: '';
            background: transparent;
            height: 20px;
            width: 20px;
            border-radius: 100%;
            border-width: 10px;
            top: 0;
            border-style: solid;
            position: absolute;
            pointer-events: none;
            z-index: 1;
        }

        &:before {
            border-color: transparent $inactive-color transparent transparent;
            transform: rotate(48deg);
            left: -23px;
        }

        &:after {
            border-color: transparent transparent transparent $inactive-color;
            transform: rotate(-48deg);
            right: -17px;
        }
    }

    &.bottom > li {
        border-radius: 0;
        border-bottom-right-radius: 25px 170px;
        border-bottom-left-radius: 20px 90px;
        margin-top: -135px;

        &:hover {
            &:before, &:after {
                border-color: $hover-color transparent transparent transparent;
            }
        }

        &.active {
            &:before, &:after {
                border-color: $active-color transparent transparent transparent;
            }
        }

        & > a {
            margin-top: 135px;
        }

        &:before, &:after {
            top: 125px;
            border-color: $inactive-color transparent transparent transparent;
        }
    }
}

/* Clear Fix took for HTML 5 Boilerlate*/

.clearfix:before, .clearfix:after {
    content: "";
    display: table;
}

.clearfix:after {
    clear: both;
}

.clearfix {
    zoom: 1;
}
</style>
