# caesar-cipher-cli-tool

Приложение для кодировния и декодирования строк из букв латинского алфавита методом шифра Цезаря (https://en.wikipedia.org/wiki/Caesar_cipher)

Установка:
Скопируйте к себе на компьютер файл caesar_cli.js и папку src cо всем ее содержимым

caesar_cli.js и папку src со всем содержимым должны находится на одном уровне (в одном каталоге).

Для работы приложения вам необходимо установить менеджер пакетов, например NPM (https://www.npmjs.com/)

Так же необходимо установить актуальную NodeJS (https://nodejs.org/)

Через пакетный менеджер установите minimist (например в командной строке введите: 
npm install minimist)

После установки можете запускать программу. Для этого в командной строке введите:
node путь_к_js_файлу/сaesar_cli.js --shift number --action <encode|decode> [--input filename1 --output filename2]

где: 

-s, --shift: сдвиг (целое число, обязательный параметр, отрицательное значение принимается)

-i, --input: файл с начальным текстом (если параметр не указан данные будут браться с консоли)

-o, --output: файл с преобразованным текстом (если параметр не указан данные будут выводиться на консоль)

Пути к файлам необходимо указывать относительно расположения файла сaesar_cli.js

-a, --action: тип преобразования encode/decode (обязательный параметр)

путь_к_js_файлу: полный путь к файлу сaesar_cli.js



**примеры:**  
1. _-a (--action)_ **encode**

```bash
$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

```bash
$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
```
> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

2. _-a (--action)_  **decode**  

```bash
$ node my_caesar_cli --action decode --shift 7 --input encoded.txt --output plain.txt
```

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

> plain.txt
> `This is secret. Message about "_" symbol!`

3. _(Optional) Отрицательное значение сдвига_

```bash
$ node my_caesar_cli --action encode --shift=-1 --input plain.txt --output encoded.txt
```

> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!`

