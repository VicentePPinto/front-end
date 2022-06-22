<template>
  <div class="flex flex-col bg-white dark:bg-blue-500 h-screen ">
        <div class="flex self-start h-1/3 w-full">
              <Switch
                v-model="enabled"
                :class="enabled ? 'bg-white' : 'bg-black'"
                class="relative inline-flex h-[20px] w-[40px] 
                shrink-0 cursor-pointer rounded-full
                 border-2 border-black 
                 transition-colors duration-200 ease-in-out 
                 focus:outline-none focus-visible:ring-2 
                 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                <span class="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  :class="enabled ? 'translate-x-5' : 'translate-x-0'"
                  class="pointer-events-none  inline-block h-[17px] w-[17px] transform rounded-full bg-gray-300 shadow-lg ring-0 transition duration-200 ease-in-out"
                />
              </Switch>
        </div>
       <div class="flex self-center justify-center w-full ">
            <div class=" w-1/3 h-80 rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg ">
                <form class="flex flex-col justify-center">
                    <label class="  text-gray-700 text-sm font-bold mb-2 ml-6 tracking-wide">e-mail</label>
                    <input v-model="email" type="text" class="block w-80 ml-6 py-2  text-gray-800 bg-white placeholder-gray-300 border border-gray-300  ">
                    
                    <label class=" text-gray-700 text-sm font-bold mb-2 ml-6 tracking-wide mt-3">password</label>
                    <input v-model="password" type="text" class=" px-16 py-2 ml-6 w-80 text-gray-800 bg-white placeholder-gray-300 border border-gray-300  ">
                    
                    <button @click.stop.prevent="loginStart" class=" px-4 w-20 ml-6 rounded-sm bg-white font-bold mt-4">Login</button>
                    <div class="mt-3">
                        <a class=" text-gray-700 text-sm font-bold mb-2 ml-6 tracking-wide cursor-pointer">Register</a>
                        <a class=" text-gray-700 text-sm font-bold mb-2 tracking-wide ml-3 cursor-pointer">Reset Password</a>
                    </div>
                 </form>
            </div>
       </div>
      
  </div>
  
</template>
<script setup>
import {ref, watch} from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { Switch } from '@headlessui/vue'
import axios from 'axios'
import Cookie from 'js-cookie'
    const enabled = ref(false)
    const email = ref(null)
    const password = ref(null)
    const router = useRouter()
    const route = useRoute()
    const loginStart = () =>{

        const payload ={
            email: email.value,
            password:password.value
        }
        const url = "http://localhost:8000/api/auth/login"
         axios.post(url,payload).then((response) =>{
           console.log(response)
           const token = response.data.access_token
           const user = [{
               name: response.data.user.name,
               email: response.data.user.email,
               id: response.data.user.id,
               id_aliancado: response.data.user.id_aliancado,
           }]
           Cookie.set('_studio_token', token )
           Cookie.set('_studio_user', JSON.stringify(user) )
            const redirectPath = route.query.redirect || '/home';
            router.push(redirectPath);
        })
    }
    watch(enabled, ()=> {
       if(enabled.value){
           console.log('light')
        localStorage.theme = 'light'
       }else{
           console.log('dark')
           localStorage.theme = 'dark'
       }
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }   
    })
       
</script>
<style scoped>
</style>