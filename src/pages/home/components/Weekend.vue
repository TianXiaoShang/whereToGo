<template>
    <div>
        <div class="title">周末去哪</div>
        <ul>
            <li class="item border-bottom" v-for="item of WeekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.url" alt="">                        
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    data(){
        return {
            WeekendList: [{
                id: '0001',
                url: 'http://img1.qunarzz.com/sight/source/1711/2b/d4ebbd8337f1ac.jpg_r_640x214_2d4332c1.jpg',
                title: '湖南泡汤圣地',
                desc: '天冷了，湖南的朋友们来这泡汤吧'
            },{
                id: '0002',
                url: 'http://img1.qunarzz.com/sight/source/1509/3a/e163a8e32517d9.jpg_r_640x214_4fd882d3.jpg',
                title: '边城秋色',
                desc: '不得不看的边城秋日之美'
            },{
                id: '0003',
                url: 'http://img1.qunarzz.com/sight/source/1811/b4/71c01c98139cf.jpg_r_640x214_30bac495.jpg',
                title: '亲身体验人间仙境',
                desc: '亲身体验西游记中人间仙境的美感'
            },{
                id: '0004',
                url: 'http://img1.qunarzz.com/sight/source/1505/ae/11f076c6cb7c47.jpg_r_640x214_6f643489.jpg',
                title: '张家界必游TOP10',
                desc: '到张家界最值得游玩的地方'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    .title
        margin-top: .2rem
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 33.9%
        .item-img
            width: 100%;
    .item-info
        padding: .1rem
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()

</style>
