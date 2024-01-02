<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>


<template>
    <header class="layout-header">
        <div class="layout-header__inner">
            <h1 class="layout-header__title">Learing Cards</h1>
            <nav class="layout-header__navigation">
                <RouterLink 
                    activeClass="active" 
                    exactActiveClass="exact-active"
                    to="/">
                    Карточки
                </RouterLink>
             </nav>
        </div>
    </header>
</template>

<style scoped>
    .layout-header {
        padding: 12px 24px;
        border-bottom: 1px solid var(--main-text);
    }

    .layout-header__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .layout-header__title {
        font-family: Raleway-Bold;
        color: var(--main-text);
        font-size: 36px;
        line-height: 40px;
    }

    .layout-header__navigation {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .layout-header__navigation a {
        color: var(--main-text);
        font-family: Raleway-Bold;
        text-decoration: none;
        font-size: 16px;
        position: relative;
    }

    .layout-header__navigation a::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        bottom: -4px;
        left: 0;
        background-color: var(--main-text);
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }

    .layout-header__navigation a:hover::before {
        transform: scaleX(1);
    }

    a:is(.active, .exact-active):before {
        transform: scaleX(1);
    }
</style>