<template>
  <div>Форма добавления книги</div>
  <!-- vee-form> это границы формы -->
  <vee-form :validation-schema="rules">
    <div>
      <label>Выбор жанра</label>
      <vee-field name="genre" as="select">
        <option value="genre1">Жанр 1</option>
        <option value="genre2">Жанр 2</option>
        <option value="genre3">Жанр 3</option>
      </vee-field>
      <!-- связанные с ошибкой по name -->
      <vee-error name="genre"></vee-error>
    </div>
    <div>
      <label>Введите название</label>
      <vee-field type="text" name="title"></vee-field>
      <vee-error name="title"></vee-error>
    </div>
    <div>
      <label>Введите описание</label>
      <!-- атрибут as и прописать имя тега который должен будет отображён  -->
      <vee-field as="textarea" name="description"></vee-field>
      <vee-error name="description"></vee-error>
    </div>
    <div>
      <label>Введите количество станиц</label>
      <vee-field type="number" name="pageCount"></vee-field>
      <vee-error name="pageCount"></vee-error>
    </div>
    <div class="flex-column">
      <label>Укажите свой возраст</label>
      <label> до 16<vee-field type="checkbox" value="1" name="age"></vee-field></label>
      <label> от 16 до 21<vee-field type="checkbox" value="2" name="age"></vee-field></label>
      <label> от 21 до 35<vee-field type="checkbox" value="3" name="age"></vee-field></label>
      <label> от 35 до 50<vee-field type="checkbox" value="4" name="age"></vee-field></label>
      <label> от 50<vee-field type="checkbox" value="5" name="age"></vee-field></label>
    </div>
    <div>
      <span>Читали ли Вы сами книгу, которую хотите добавить:</span>
      <vee-error name="read"></vee-error>
      <div class="flex-column">
        <label> <vee-field type="radio" value="yes" name="read" checked />Да</label>
        <label> <vee-field type="radio" value="no" name="read" />Нет</label>
      </div>
    </div>
    <input type="submit" value="Добавить">
  </vee-form>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
export default { /* библиотека для валидации форм vee-validate, yup */
  name: "SharedList",
  components: {
    // Form, Field, ErrorMessage
    VeeForm: Form, /* границы формы */
    VeeField: Field, /* поле формы, по умолчанию */
    VeeError: ErrorMessage, /* элемент html для вывода ошибки */
  },
  data() {
    return {
      rules: yup.object({
        // значение атрибута name: правило
        title: yup.string().trim().required("Поле обязательно заполнить").max(20, "Максимум 20 символов"),
        pageCount: yup.number().typeError("Введите число").required("Поле обязательно заполнить").positive("Введите целое число")
      })
    }
  }
}
</script>

<style scoped>
.flex-column {
  display: flex;
  flex-direction: column;
}
</style>