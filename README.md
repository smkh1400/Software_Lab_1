# Software_Lab_1

پروژه فرانت استاتیک شامل صفحات ثبت نام و لاگین

صفحه لاگین پروژه :

این صفحه به عنوان بخشی از پروژه طراحی شده است که یک فرم ورود ساده و کاربرپسند را ارائه می‌دهد. کاربران می‌توانند نام کاربری و رمز عبور خود را وارد کنند و در صورت صحت اطلاعات، به داشبورد یا پنل کاربری هدایت شوند. در غیر این صورت، پیام خطایی نمایش داده می‌شود که آن‌ها را از ورود ناموفق مطلع می‌کند.

ساختار:


این صفحه از ترکیب HTML، CSS و JavaScript برای ارائه یک تجربه کاربری مناسب استفاده می‌کند.


`HTML`:

    یک فرم شامل دو فیلد برای نام کاربری و رمز عبور به همراه دکمه ورود طراحی شده است.

`CSS`: 

    استفاده از گرادیان رنگی برای پس‌زمینه و طراحی مدرن دکمه ورود با افکت هاور. همچنین، پیام خطا در صورت ورود نامعتبر نمایش داده می‌شود.

`JavaScript`:

    پس از کلیک روی دکمه ورود، مقدار ورودی‌ها دریافت و بررسی می‌شود. اگر اطلاعات صحیح باشند، کاربر به dashboard.html منتقل می‌شود و در غیر این صورت، پیام خطا نمایش داده خواهد شد. نام کاربری و رمز عبور صحیح به صورت پیش‌فرض correctUsername و correctPassword تعیین شده‌اند



صفحه رجیستر پروژه : 


این صفحه یک فرم ساده است که در آن کاربر می تواند عملیات ثبت نام را انجام دهد. کاربران می‌توانند نام کاربری و ایمیل و رمز عبور خود را وارد کنند و در صورت صحت اطلاعات، عملیات رجیستر برای آن ها انجام شود و پیام موفقیت آمیز بودن عملیات برای آن ها نشان داده شود. در غیر این صورت، پیام خطایی نمایش داده می‌شود که آن‌ها را از عدم صحت اطلاعات مطلع می‌کند.

ساختار:


این صفحه از ترکیب HTML، CSS و JavaScript برای ارائه یک تجربه کاربری مناسب استفاده می‌کند.


`HTML`:

    یک فرم شامل فیلد های برای نام کاربری و ایمیل و رمز عبور به همراه دکمه ثبت نام طراحی شده است.

`CSS`: 

    استفاده از فنت و اندازه و فاصله های مناسب برای فرم در این بخش تعریف شده است. همچنان رنگ زمینه و متن دکمه ثبت نام نیز به خوبی در این بخش طراحی شده است.

`JavaScript`:

    در این بخش صحت سنجی اطلاعات مربوط به رجیستر و نشان دادن پیام خطا و یا پیام موفقیت آمیز بودن فرایند گنجانده شده است.




مراحل پیاده سازی آزمایش:

1- ابتدا پروژه را در `github` به صورت عمومی ایجاد کردیم و پس از دعوت از اعضای گروه به پروژه برد `kanban` را ایجاد کردیم.

2- پس از تصمیم گیری در رابطه با نحوه پیاده سازی صفحه وب تصمیم بر این شد که به صورت ساده تنها از زبان های `HTML`, `CSS` و `JavaScript` برای توسعه استفاده کنیم. ساختار صفحه وب نیز دارای یک صفحه `home`می باشد که در آن به صفحات ثبت نام و لاگین دسترسی وجود دارد.

3- پس از تقسیم کار تسک ها در برد `kanban` تعریف شدند و تسک ها به افراد محول شدند.

4- در کل 4 برنچ در این پروژه استفاده شد که عبارت اند از:

    main - develop - feature/login - feature/register

5- برای محافظت از برنچ `main` در تنظیمات `github` از گزینه ی `Require a pull request before merging` استفاده شد تا تنها به کمک `pull request` بتوان ادغامی با برنچ `main` انجام شود.

![alt text](main_protection.png)

.

6- به دلیل آن که تمام فایل های پروژه نیاز به کامیت شدن داشتند، برای آن که بتوانیم قابلیت `gitignore` را تست کنیم از یک فایل تکست به نام `example.txt` استفاده کردیم. سپس با اضافه کردن نام این فایل به فایل `gitignore.` کاری کردیم که در کامیت های به این فایل توجهی نشود.


7- برای استقرار مستمر روی `GitHub Pages` از یک فایل پیکربندی به آدرس `github/workflows/deploy.yml` استفاده شد تا در هر بار مرج با برنچ `main` پروژه `deploy` شود.

8- در پروژه دوبار به `conflict` برخورد کردیم. بار اول به این دلیل بود که در مخزن محلی در برنچ `feature/register` کامنتی در کد های برنامه قرار داده بودم ولی به دلیل آن که در مخزن اصلی این کامنت وجود نداشت و کد برنامه گذاشته شده بود زمانی که از دستور `git pull` استفاده شد، چون مرج نیز باید انجام شود، به `conflict` خوردیم.

![alt text](conflictByPullingFeatureRegisterToMyLocalBranch.png)

برای رفع این مشکل به صورت دستی تغییری که مناسب تر بود را نگه داشته و دیگری را حذف کردم.

![alt text](resolvingConflict.png)

`conflict` دوم نیز به طور مشابه برای فایل `README` رخ داد که با ادغام هر دو تغییر، آن را رفع کردیم.

![alt text](image.png)

9- در نهایت پس از اتمام پیاده سازی در برنچ `develop`، به کمک `pull request` این برنچ را با برنچ `main` ادغام می کنیم و به کمک فایل پیکربندی، می توان صفحات را در آدرس `https://github.com/smkh1400/Software_Lab_1/index.html` مشاهده کرد. 

پاسخ سوالات:

1- پوشه مخفی `git.` زمانی ساخته می شود که ما از دستور `git init` استفاده می کنیم.
این پوشه دارای متادیتا هایی می باشد که به مدیریت مخزن کمک می کند. برای مثال این پوشه دارای اطلاعاتی از جمله برنج فعلی و یا کامیت فعلی، لاگ های تغییرات  و ... می باشد.

2- منظور از atomic commit  این است که تغییراتی که کامیت می شوند باید مربوط به فقط یک کار باشند، همه تغییراتی که برای رسیدن به هدف دارند درون آن باشد و وابستگی به چیز دیگری نداشته باشد و همچنین تغییر ایجاد شده باید با دیگر بخش های پروژه سازگار باشد. این ویژگی ها باعث می شود که بررسی این کامیت ها آسان تر و در صورتی که مشکلی در آن وجود داشته باشد به راحتی بتوان به حالت قبلی آن را بازگرداند.
به بیانی تغییری که کامیت به آن اشاره دارد باید به اندازه ای کوچک باشد که بتوان آن را در یک جمله خلاصه کرد.

به طور مشابه به درخواستی atomic pull-request  می گویند که مربوط به تغییرات کوچک و مستقل باشد و برای رسیدن به یک هدف انجام شده باشد تا بتوان به راحتی آن را تست و بررسی کرد.

3- دستورات گفته شده برای کنترل تغییرات بین برنچ های متفاوت و مدیریت آن ها استفاده می شوند.

`git fetch`: 

    این دستور زمانی استفاده می شود که بخواهیم تغییراتی که در مخزن ریموت اعمال شده اند را دانلود کرده ولی آن ها را با تغییرات برنچ لوکال خودمان ادغام نکنیم. 

`git merge`: 

    این دستور مناسب زمانی است که بخواهیم تغییرات دو تا از برنچ ها را با هم ادغام کنیم

`git pull`: 

    این دستور ترکیبی از دو دستور git fetch و git merge می باشد. به این معنا که هم تغییرات را از مخزن ریموت دانلود کرده و آن ها را با برنچ فعلی ادغام می کند.

`git rebase`: 

    این دستور کمک می کند که بدون نیاز به انجام merge تاریخچه تغییرات یک برنچ را در ادامه ی یک برنچ دیگر قرار داد تا در نهایت یک سیر خطی از کامیت ها داشته باشیم.

`git cherry-pick`: 

    این دستور تغییرات یک کامیت خاص را روی یک برنچ اعمال می کند بدون آن نیاز باشد دو برنچ را با هم ادغام کنیم.

4- دستورات گفته شده قابلیت های مختلفی را انجام می دهند

`git reset`: 

    این دستور می تواند پوینتر کامیت فعلی را به کامیت دلخواه مشخصی برگرداند و از آن برای برگرداندن کامیت استفاده کرد.

`git revert`:

    یک کامیت جدید می سازد که در آن تغییرات آخرین کامیت را برمی گرداند.

`git restore`:

    از این دستور برای برگرداندن فایل ها از حالت staged یه unstage و حذف تغییرات استفاده می شود.

`git switch`:

    برای جا به جا شدن بین برنچ های مختلف استفاده می شود. هم چنین می توان با آن برنچ جدیدی ساخت و به آن رفت.

`git checkout`:

    یکی از دستورات قدیمی گیت می باشد که دو عملکرد git switch و git restore را می توان انجام دهد. به بیان دیگر هم می توان بین برنچ های مختلف جا به جا شود و همچنین فایلی را از یک کامیت خاص بازیابی کند.


5- مفهوم stage یا index به یک فضای میانی بین کامیت اصلی و فضای کار گفته می شود که در آن می توان تغییرات و فایل هایی که قصد داریم آن ها را در کامیت موردنظر اعمال کنیم را به کمک دستور `git add` اضافه کنیم و سپس همه فایل های اضافه شده را کامیت کنیم.

دستور `git stash` این امکان را ایجاد می کند که بتوان تغییرات اعمال شده روی یک برنچ را چه staged و چه unstaged در فضایی به نام `stash stack` ذخیره کرد بدون آن که نیاز باشد کامیتی در برنچ مورد نظر رخ دهد. این دستور زمانی به درد می خورد که بخواهیم تغییراتی را از مخزن ریموت دریافت کنیم یا نیاز باشد به برنچ های دیگر سر بزنیم ولی کامل مطمئن از تغییرات فعلی برنچ خود نیستیم و نمی خواهیم کامیتی انجام دهیم. (کامیت کردن تغییرات برای جا به جایی بین برنچ ها و دریافت آپدیت های جدید که ممکن است با تغییرات  فعلی برنچ تضاد داشته باشند ضروریست). همچنین نمی خواهیم تغییرات فعلی خود را از دست بدهیم.


6- مفهوم Snapshot در گیت به این معناست که هر کامیت یک تصویر کامل از وضعیت تمام فایل‌های پروژه در آن لحظه است، نه فقط تغییرات (diff) نسبت به کامیت قبلی. برای پیاده‌سازی این ویژگی، گیت به هر فایل یک Object-ID منحصر به فرد اختصاص می‌دهد و در هر کامیت، پوینترهایی به این Objectها قرار می‌دهد. اگر فایلی تغییر کند، یک Object جدید با یک Object-ID جدید برای آن ایجاد می‌شود. اما اگر فایلی تغییر نکند، گیت از Object-ID کامیت قبلی برای آن استفاده می‌کند. این مکانیزم باعث می‌شود که گیت بتواند به‌طور کارآمد و سریع از snapshotها برای مدیریت تاریخچه پروژه استفاده کند.


7- از تفاوت های مخرن محلی و ریموت می توان به موارد زیر اشاره کرد:

- مخزن محلی روی ماشین هر شخص قرار دارد و تنها همان شخص به آن دسترسی دارد ولی مخزن ریموت در یک سرور قرار دارد و همه افراد می توانند به آن دسترسی داشته باشند.
- هدف مخزن محلی، توسعه روزانه پروژه می باشد ولی هدف مخزن ریموت، بک آپ گیری و اشتراک کد و همکاری اعضای پروژه می باشد.
- برای مدیریت مخزن محلی از دستوراتی مانند `commit` `branch` `stash` استفاده می شود ولی برای کنترل مخزن ریموت از دستوراتی مانند `push` `pull` `clone` `fetch` استفاده می شود.
