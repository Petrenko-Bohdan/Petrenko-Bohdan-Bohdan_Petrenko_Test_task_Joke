const btnAdd = document.getElementById('btn_add');
const modal = document.getElementById('wrapier_modal');
const btnClose = document.getElementById('button__cancel');
const overlay = document.getElementById('overlay');
const btnAddModal = document.getElementById('button__add_modal');
const poput = document.getElementById('popup');
const btnClosePopup = document.getElementById('btn__close_popup');
const popup = document.getElementById('popup');
const next=document.getElementById('content__btn_next');
const slides=document.querySelectorAll('.content__text_desc');
const category=document.querySelectorAll('.category__content');
const addButton = document.getElementById('button__add_modal');
// const btnClosePopupRemov = document.getElementById('btn__close_popupRemov')




/*modal-add*/

btnAdd.addEventListener('click',() => {
	modal.classList.add('active')
});

const closeModal = () => {
	modal.classList.remove('active');
};

overlay.addEventListener('click',closeModal);
btnClose.addEventListener('click',closeModal);

btnAddModal.addEventListener('click', () => {
	poput.classList.add('active');
	modal.classList.remove('active');
})

btnClosePopup.addEventListener('click',()=>{
	popup.classList.remove('active')
})

btn__close_popupRemov.addEventListener('click',()=>{
	close__popup.classList.remove('active')
})



// add new cart

const addJoke = (category, text) => {
	const slide = document.createElement('div');
	slide.classList.add('jokes-content__text_desc');
	slide.innerHTML = 
	`<div class="content__text_category">
		<p class="category__text">	kategoria: </p>
		<div class="category__content">									
			<div  class="category__content_desc active">${category}</div>						
		</div>	
	</div>
	${text}
	<button type="button" id="btn_delete" class="btn btn_delete">
		Usun
	</button>`;
	jokes_content__text.appendChild(slide); 
} 

  addButton.addEventListener('click', () => {
	const select = document.getElementById('select__add');
	const input = document.getElementById('add__description'); 
	 addJoke(select.value, input.value); 
})



