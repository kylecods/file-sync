<template>
    <div class="w-screen h-screen flex">
       <SideBar :show-side="revealSide" />
       <MainContent :side-on-click="showSideBar"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import SideBar from '../components/layout/SideBar.vue';
import MainContent from '../components/layout/MainContent.vue';
let revealSide = ref(true);


function showSideBar(){
    revealSide.value = !revealSide.value;
}

</script>