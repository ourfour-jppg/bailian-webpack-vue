<template>
<div class="activity">
                <div class="h3">精选活动</div>
                <div v-for="item in acimg">
                    <div class="acimg">
                        <img :src="'http://47.106.213.218:1802/'+item.width220[0].img" />
                    </div>
                    <div class="acimgs swiper-container">
                        <ul class="acimglist swiper-wrapper" style="width:3000px;">
                            <li class="swiper-slide" v-for="it in item.width220"><a href="#"><img :src="'http://47.106.213.218:1802/'+it.img" /></a></li>
                        </ul>
                    </div>
                </div>
</div>
</template>

<script>
     export default {
        name: 'iactivity',
        data(){
            $.get('http://47.106.213.218:1802/api/home',{
                home:1
            },(res)=>{
                    this.acimg = res.slice(3,8)
                    console.log(this.acimg)
                }
            )
            return {
                acimg:[]
            }
        }
        }
</script>

<style scoped>
main .activity .h3{
    height: 1.333333rem;
    line-height: 1.333333rem;
    text-align: center;
    font-size: 0.426667rem;
    font-weight: 600;
}
main .activity{
    padding:0 0.266667rem;
    box-sizing: border-box;
}
main .activity .acimg{
    height: 4.4rem;
}
main .activity .acimg img{
    width: 100%;
    height: 4.4rem;
}
main .activity .acimgs{
    overflow:hidden;
    position:relative;
    height: 3.6rem;
    margin:0.266667rem 0;
}
main .activity .acimglist{
    position:absolute;
    width: 19.333333rem;
    height: 3.6rem;
}
main .activity .acimglist li{
    float:left;
    height: 2.6rem;
    width: 5.6rem;
    margin-right: 0.133333rem;
}
main .activity .acimglist li img{
    height: 2.6rem;
    width: 5.6rem;
}
</style>