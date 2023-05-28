<template>
    
    <div class="w-[300px] h-full bg-gray-800 text-white" v-show="showSide">
            <div class="flex flex-row space-x-2 justify-start pl-4 items-center h-[50px] bg-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-24-hours" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
                    <path d="M4 13a8.094 8.094 0 0 0 3 5.24"></path>
                    <path d="M11 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2"></path>
                    <path d="M17 15v2a1 1 0 0 0 1 1h1"></path>
                    <path d="M20 15v6"></path>
                </svg>
                 <h3 class="text-xl font-bold">
                    FileSync
                </h3> 
                
            </div>
            <div class="h-[calc(100vh-50px)] py-4">
                <div class="px-2 flex flex-col space-y-3">
                    <RouterLink to="/" class="inline-flex relative items-center py-2 px-2 w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-100 hover:text-gray-600 transition duration-400 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2 mr-2 w-[25px] h-[25px]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                            <path d="M10 12h4v4h-4z"></path>
                        </svg>
                        Home
                    </RouterLink>
                    <RouterLink to="/my-files" class="inline-flex relative items-center py-2 px-2 w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-100 hover:text-gray-600 transition duration-400 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-files mr-2 w-[25px] h-[25px]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M15 3v4a1 1 0 0 0 1 1h4"></path>
                            <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z"></path>
                            <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"></path>
                        </svg>
                        My Files
                    </RouterLink>

                </div>
            </div>
    </div>

</template>
<script setup>
    defineProps({
        showSide:{ 
            type: Boolean,
            default: true
        }
    })
</script>