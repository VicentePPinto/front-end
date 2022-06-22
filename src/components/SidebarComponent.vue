<template>
  <div class="flex-none w-56 relative z-20 bg-gray-200 dark:bg-slate-800 flex flex-col h-screen overflow-hidden">
      <div class="flex-grow overflow-y-auto overflow-x-hidden scroll-container">
            <ul class="space-y-1 mb-8">
                <li v-for="(bar, index) in menu" :key="index">
                    <!-- Visualização de headers -->
                    <div class="ml-4 mt-5" >
                        <span class="text-gray-700 text-tiny">{{bar.item}}</span>
                    </div>
                    <div v-for="(itembar,index) in bar.group" :key="index" class="ml-4 mt-5" >
                        <span  @click.stop.prevent="itemPath(itembar.path)" class="text-gray-700 text-tiny cursor-pointer">{{itembar.key}}</span>
                    </div>

                </li>
            </ul>
        </div>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'

const menu = [{
    item: 'user',
    group:[{
        key:'create',
        value:true,
        path:'/createUser'
    },
        {
        key:'search',
        value:true,
        path:'/searchUser'
    },
        {
        key:'perfil',
        value:true,
        path:'/perfil'
    }]},
    {
    item: 'Diagnósticos',
    group:[{
        key:'dashboard',
        value:true,
        path:'/home'
    },
     {
        key:'lista',
        value:true,
        path:'/listaDiagnosticos'
    }],
    }
]

const router = useRouter()
const route = useRoute()
const itemPath = (path) => {
    const redirectPath = route.query.redirect || path;
            router.push(redirectPath);
};
</script>
