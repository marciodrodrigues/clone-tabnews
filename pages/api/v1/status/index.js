function status(request, response) {
  response.status(200).json({ chave: "o pai é foda" });
}

export default status;
