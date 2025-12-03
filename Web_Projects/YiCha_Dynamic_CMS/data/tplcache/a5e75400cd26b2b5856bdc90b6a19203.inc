{dede:list  pagesize='30' col='4' titlelen='60' orderby='pubdate' orderway='desc' 
 channel='6'  att='h' }{dede:arclist  typeid='1'  row='12'  titlelen='76' addfields='img1,price' channelid='6'}
    	<li class="piece">
			<img src="[field:img1/]" width="263px" height="230px">
            <p>[field:title/]</p>
			<hr color="#b5c3a5" noshade>
            <p>￥[field:price /]/kg元</p>
			<p align="right"><a href='[field:arcurl/]' class='clj'>+加入购物车</a></p>
        </li>
{/dede:arclist}{/dede:list}