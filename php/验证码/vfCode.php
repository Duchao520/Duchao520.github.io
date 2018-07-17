<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/7/17
 * Time: 18:37
 */
/*验证码封装函数
vfCode(Width,Height,line,px,textNum,text,fontFamily(默认为LuckiestGuy.ttf))
*/
function vfCode($Width,$Height,$line,$px,$textNum,$text,$fontFamily="LuckiestGuy.ttf"){
    $img=imagecreate($Width,$Height);
    /*颜色处理*/
    function getColor($img,$type='l'){
        if($type=='l'){
            $r=mt_rand(130,240);
            $g=mt_rand(130,240);
            $b=mt_rand(130,240);
        }else if($type=='b'){
            $r=mt_rand(10,120);
            $g=mt_rand(10,120);
            $b=mt_rand(10,120);
        }
        return imagecolorallocate($img,$r,$g,$b);
    }
//  填充背景
    imagefill($img,0,0,getColor($img));
//    划线
    for($i=0;$i<$line;$i++){
        imageline($img,mt_rand(0,$Width),mt_rand(0,$Height),mt_rand(0,$Width),mt_rand(0,$Height),getColor($img));
        imagesetthickness($img,3);
    }
//    画像素点
    for($i=0;$i<$px;$i++){
        imagesetpixel($img,mt_rand(1,$Width-1),mt_rand(1,$Height-1),getColor($img,'b'));
    }
//    画字
    for($i=0;$i<$textNum;$i++){
        $word=mb_substr(str_shuffle($text),0,1,'utf-8');
        imagettftext($img,mt_rand(30,40),mt_rand(-45,45),mt_rand($i*(($Width/$textNum)-10)+20,$i*$Width/$textNum+20),mt_rand($Height-30,$Height-10),getColor($img,'b'),$fontFamily,$word);
    }
    header('content-type:image/png');
    imagepng($img);
}
vfCode(200,60,6,100,4,"QWERTYUIOPASDFGHJKLZXCVBNM");
?>