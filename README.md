# Validador de CPF básico

Desafio JavaScript - fazer um simples validador de CPF.

## Inputs Válidos

- xxxxxxxxxxx
- xxx.xxx.xxx.xx
- Meu cpf é xxxxxxxxxxx
- xxx.xxx.xxx.xx esse é meu cpf
- xxxxxxxxxxx esse é meu cpf

etc...

## Ponto de Melhoria

- Quando o usuário digita um cpf válido seguido de outros caracteres retorna como cpf válido quando deveria retornar como cpf inválido. Isso acontece pois ao extrair um cpf ele pega os 11 primeiros numeros e faz a validação.
