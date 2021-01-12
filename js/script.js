//variáveis globais
var $counting = (document.getElementById("ul").getElementsByTagName("li").length)
var $ul = document.getElementById('ul')
var $input = document.getElementById('input')



$input.addEventListener('keyup', (event) => {
    if(event.keyCode === 13){
        addItemTodo()
    } 
})


//função de clique do botão Adicionar
function addItemTodo(){
    // Valores de váriaveis que serão utilizados
    var $li = document.createElement('li')
    var $checkbox = document.createElement('button')
    $checkbox.className = 'checkbox'
    $checkbox.innerHTML = '\u00D7'

    $counting += 1

    //Valor máximo de todos (10) Previne a criação de mais
    if ($counting>10){
        $counting = $counting - 1
        $input.disabled = true
        return
    }

    //Teste de input, caso o valor seja nulo, a função retorna e previne o auto-incremento
    if (($input.value) == ''){
        $counting -= 1
        alert('Insira um item')
    } else {
        var $textNode = document.createTextNode($input.value)
        $li.appendChild($textNode)
        $ul.appendChild($li)
        $li.appendChild($checkbox)
    }
    $input.value = '' //Input Clear

    //Função para deletar cada todo individualmente
    $checkbox.onclick = function deleteTodo(){
        var $alertClearOne = confirm('Tem certeza que deseja excluir o to-do?')
        if ($alertClearOne == true){
            $li.style.display = 'none'
            $counting -= 1
            $input.disabled = false
        }
    }

}

//Função do Botão Limpar -> Apagar todos os itens.
function clearTodoList(){
    var $alertClearAll = confirm('Tem certeza que deseja excluir todos os itens?')
    if ($alertClearAll == true){
        $counting = 0
        $ul.innerHTML = ''
        $input.value = ''
        $input.disabled = false
    }
}