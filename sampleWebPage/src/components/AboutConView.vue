<template>
     <div id="about">
          <p class="headline">About</p>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
               <div v-for="chara in charas" :key="chara.id" class="chara-display">
                    <p class="sub-headline"> {{ chara.name }}</p>
                    <p class="text-2xl"> {{ chara.loc }}</p>
               </div>
          </div>
     </div>
</template>

<script lang="ts">
     export default {
          data() {
               return {
                    charas: [
                         {    
                              id: 1, 
                              name: 'くまモン', 
                              loc: '熊本',
                         },
                         {    
                              id: 2, 
                              name: 'はばたん', 
                              loc: '兵庫',
                         },
                         {    
                              id: 3, 
                              name: 'オカザえもん', 
                              loc: '愛知',
                         },
                    ]
               }
          }
     }
</script>