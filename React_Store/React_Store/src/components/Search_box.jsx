import './Search_box.css'

const Search_box = () => {
    function limparBotao() {
        
        var botaoSubmit = document.getElementById("meuBotao")
  
        
        botaoSubmit.value = ""
    }
    return(
        <form action="" className='input_search_box'>
            <input type="text" placeholder="Search" id='input_text'/>
            <input type="button" id='imput_submit'/>
        </form>
    )
}
export default Search_box
