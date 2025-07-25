const custom_profile_fields = {
  entity_not_exists_with_names: 'Не удается найти сущности с указанными именами: {{names}}',
  invalid_min_max_input: 'Некорректный ввод min и max.',
  invalid_options: 'Некорректные параметры поля.',
  invalid_regex_format: 'Неверный формат регулярного выражения.',
  invalid_address_parts: 'Некорректные части адреса.',
  invalid_fullname_parts: 'Некорректные части полного имени.',
  name_exists: 'Поле с таким именем уже существует.',
  conflicted_sie_order: 'Конфликт значения порядка поля для опыта входа.',
  invalid_name: 'Неверное имя поля, допускаются только буквы или цифры, чувствительно к регистру.',
  name_conflict_sign_in_identifier:
    'Недопустимое имя поля. "{{name}}" является зарезервированным ключом идентификатора входа.',
  name_conflict_custom_data:
    'Недопустимое имя поля. "{{name}}" является зарезервированным ключом пользовательских данных.',
  name_required: 'Имя поля обязательно.',
};

export default Object.freeze(custom_profile_fields);
