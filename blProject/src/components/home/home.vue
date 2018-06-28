<template>
    <div>
        <isearch />
        <main>
            <imain />
        </main>
        <ifooter />
    </div>
</template>
<script>
    import isearch from '../isearch'
    import ifooter from '../ifooter'
    import imain from '../imain'
    
    export default {
        name: 'home',
        components: {
            isearch,
            ifooter,
            imain
        }
    }
</script>

<style scoped>
main{
    box-sizing:border-box;
    width:100%;
    height:100%;
    overflow:hidden;
    margin-top:1.266667rem;
}
</style>