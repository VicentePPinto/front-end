<template>
  <div class="flex justify-center h-screen ">
       <div class="flex  self-center justify-center
        w-3/12 h-1/2
        rounded-md 
        bg-gradient-to-r from-sky-500 to-indigo-500 
        rounded-lg 
      
       ">
       <form class="grid justify-items-start self-center ">
           <label class=" text-gray-700 text-sm font-bold mb-2 tracking-wide">e-mail</label>
           <input v-model="email" type="text" class="block px-16 py-2  text-gray-800 bg-white placeholder-gray-300 border border-gray-300  ">
           <label class=" text-gray-700 text-sm font-bold mb-2 tracking-wide mt-3">password</label>
           <input v-model="password" type="text" class=" px-16 py-2  text-gray-800 bg-white placeholder-gray-300 border border-gray-300  ">
           <button @click.stop.prevent="loginStart" class=" px-4 rounded-sm bg-white font-bold mt-4">Login</button>
           <div class="mt-3">
               <a class=" text-gray-700 text-sm font-bold mb-2 tracking-wide cursor-pointer">Register</a>
               <a class=" text-gray-700 text-sm font-bold mb-2 tracking-wide ml-3 cursor-pointer">Reset Password</a>
           </div>
        </form>
       </div>
       
  </div>
</template>

<script setup>
import {ref} from 'vue';
import { useRouter, useRoute } from 'vue-router'

    const email = ref(null)
    const password = ref(null)
    const router = useRouter()
    const route = useRoute()
    const loginStart = () =>{
        if((email.value == 'admin@admin.com') && (password.value = 'pass')){
            const redirectPath = route.query.redirect || '/home';
            router.push(redirectPath);
        }
    }


     
  

</script>

<style scoped>

</style>