const alunoTexto = '{"name": "joao", "age": "20", "course": "web"}';

try {
  const alunoSerializado = JSON.parse(alunoTexto);
  console.log(alunoSerializado.course);
} catch (error) {
  console.log(`Erro ao serializar o aluno: ${error.message}`);
}
