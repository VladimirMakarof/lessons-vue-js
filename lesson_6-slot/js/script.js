'use strict'

const ads = {
  template: `
    <h3>Объявление</h3>
    <slot> Разместите в столе свое объявление</slot>
  ` // с помощью <slot></slot> родительский компоненты могут передать html фрагменты в дочерние компоненты
  // Разместите в столе свое объявление значение по умолчанию 
};

const card = {
  template: ` 
 <slot name="title"> </slot>
 <slot name="subtitle"> </slot>
 <slot name="content"> </slot>
  <slot> Разместите в столе свое объявление</slot>
  ` // в случае если слотов тегов несколько то нужно задавать имена 
  // только 1 слот может быть без имени 
}

Vue.createApp({
  components: { ads, card }
}).mount('#app')