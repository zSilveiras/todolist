//variáveis globais
var $counting = (document.getElementById("ul").getElementsByTagName("li").length)
var $ul = document.getElementById('ul')
var $input = document.getElementById('input')
var $dateTitle = document.getElementById('dateTitle')
var $hoursTitle = document.getElementById('hoursTitle')
var $loadingScreen = document.getElementById('loadingScreen')


window.onload = time()

function load(){
    $loadingScreen.style.display = 'none'
}

setTimeout(load, 1500)

//Função de criação do relógio
function time(){
    var $date = new Date()
    var $day = $date.getDate()
    var $month = $date.getMonth()
    var $year = $date.getFullYear()

    const $event = new Date($year, $month, $day)
    const $optionsMonth = {month: 'long'}
    const $optionsWeek = {weekday: 'long'}

    var $monthNow = $event.toLocaleDateString(undefined, $optionsMonth)
    var $weekDayNow = $event.toLocaleDateString(undefined, $optionsWeek)

    document.getElementById('dayTitle').textContent = $day
    document.getElementById('monthTitle').textContent = $monthNow
    document.getElementById('yearTitle').textContent = $year
    document.getElementById('weekDay').textContent = $weekDayNow


}

//Chama a função addItemTodo() ao pressionar a tecla enter
$input.addEventListener('keyup', (event) => {
    if(event.keyCode === 13){
        addItemTodo()
    } 
})


//função de clique do botão Adicionar
function addItemTodo(){
    // Valores de váriaveis que serão utilizados
    var $li = document.createElement('li')
    var $checkbox = document.createElement('SPAN')
    $checkbox.className = 'checkbox'
    $checkbox.innerHTML = '<i class="far fa-times-circle"></i>'

    $counting += 1

    //Valor máximo de todos (10) Previne a criação de mais
    if ($counting>9){
        $counting = $counting - 1
        $input.style.backgroundColor = '#a770ef'
        $input.disabled = true
        $input.value = ''
        return
    }

    //Teste de input, caso o valor seja nulo, a função retorna e previne o auto-incremento
    if (($input.value == '') || ($input.value == ' ')){
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
            $input.style.backgroundColor = 'white'
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
        $input.style.backgroundColor = 'white'
        $input.disabled = false
    }
}
