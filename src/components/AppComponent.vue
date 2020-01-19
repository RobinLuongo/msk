<template>
    <div>
        <h1>Hello from the AppComponent</h1>
        <Child></Child>
    </div>
</template>
<script>
import Child from './ChildComponent.vue'
   export default {
       components: {
           Child
       }
   }
</script>