const FormataData = (data) => {
  /* Exemplo de data recebida: 2012-11-26 */

  const dividirData = data.split("-");
  const dia = dividirData[2];
  const mes = dividirData[1];
  const ano = dividirData[0];

  return `${dia}/${mes}/${ano}`;
};

export { FormataData };
