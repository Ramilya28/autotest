## Проект автоматизированного тестирования для Lalafo
## Описание
Этот проект использует Playwright для автоматизации тестов на сайте Lalafo.kg. 
Основная цель проекта — протестировать функциональность переключения языков на сайте с русского на кыргызский и обратно, а также проверить отображение категорий на главной странице после переключения языков.
 Основные тесты
1. Switch language to Kyrgyz and back to Russian on Lalafo.kg (language-switch.spec.ts)
 Этот тест проверяет функциональность переключения языков на сайте Lalafo.kg:
- Переключение с русского на кыргызский.
- Проверка, что текст "Русский" и "Кыргыз тили" отображается на странице.
- После изменения языка проверяется, что все текстовые элементы и категории обновлены в соответствии с выбранным языком.
2. Switch language to Kyrgyz and verify categories on Lalafo.kg (language-change.spec.ts)
Тест проверяет корректность работы функционала для смены языка и отображения категорий на главной странице:
- Переключение с русского на кыргызский язык.
- Ожидание, пока все элементы меню и категории на главной странице обновятся в соответствии с выбранным языком.
- Проверка, что кнопки меню и категории на кыргызском языке отображаются правильно.
3. Change language and test registration modal (language-registration-modal.spec.ts)
Этот тест проверяет функциональность переключения языка и работу модального окна для регистрации/входа на сайте Lalafo.kg*:
- Переключение с русского на кыргызский язык.
- Проверка, что текст на странице обновляется на кыргызский.
- Открытие и закрытие модального окна входа/регистрации.
## Требования
- Playwright
- Node.js (версия 14 и выше)

## add and configure tsconfig 
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html 


## Установка 
Команда установит все зависимости 
npm install 
Установка Playwright
npm init playwright@latest


## Ссылки на тестовые примеры
# /tests/api/AllBalances.spec.ts
# /tests/api/Favorite.spec.ts
# /tests/api/ListOfTree.spec.ts
# /tests/api/Profiles.spec.ts

# /tests/ui/t1Change language to Kyrgyz and back to Russian on Lalafo.kg.spec.ts
# /tests/ui/t2Switch language to Kyrgyz and verify categories on Lalafo.kg.spec.ts
# /tests/ui/t3Change language and test registration modal.spec.ts