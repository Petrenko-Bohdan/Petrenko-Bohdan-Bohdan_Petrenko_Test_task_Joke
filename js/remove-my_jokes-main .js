
const overlayRemove = document.getElementById('overlayRemove');
const remove=document.getElementById('btn_delete');
const modalRemove=document.getElementById('confirmation-wrapier_modal');
const modalRemoveCancel=document.getElementById('button__cancel_remove');
const popupRemov = document.getElementById('close__popup');
const btnClosePopupRemov = document.getElementById('btn__close_popupRemov');
const btnYesModalRemov=document.getElementById('button__add_modalRemove');

//   remove
 
document.getElementsByClassName('button__cancel_remove')[0].addEventListener('click', (event) => { 
		modalRemove.classList.add('active')
		if (event.target.id === 'button__add_modalRemove') { 
			event.target.parentNode.remove(); 
			} 
		})

		let itemToDelete;
document.getElementsByClassName('jokes-content__text')[0].addEventListener('click', (event) => { 
	if (event.target.id === 'btn_delete') { 
		itemToDelete = event.target.parentNode;
		modalRemove.classList.add('active')
 	} 
   })

const closeModalRemove = () => {
	modalRemove.classList.remove('active');
};

modalRemoveCancel.addEventListener('click',closeModalRemove)
overlayRemove.addEventListener('click',closeModalRemove);

btnYesModalRemov.addEventListener('click', () => {
	console.log('btnYesModalRemov');
	popupRemov.classList.add('active');
	modalRemove.classList.remove('active');
	document.getElementsByClassName('confirmation-modal__window')[0].addEventListener('click', (event) => { 
			itemToDelete.remove();
		  })
})



