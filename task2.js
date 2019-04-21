var styles = ['Джаз', 'Блюз']
styles.push('Рок-н-Ролл');
console.log(styles);
styles[styles.length-2]='Класика';
console.log(styles);
styles.shift();
console.log(styles[0]);
styles.unshift('Реп','Реггі');
console.log(styles);
