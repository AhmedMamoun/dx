

//********************************************************************** */
// عشان تعمل الهووم اكتف تعمل اية ؟

$('#main-nav ul li') .on('click', function(){

    $(this).addClass('active').siblings().removeClass('active');
    });

// اختار العنصر ثم قاله * ساعه م اتك عليك نفذ الاتي
// حط كلاس اكتف للي شبة
// امسح الاكتف من ال ايقونه ال كانت علية
