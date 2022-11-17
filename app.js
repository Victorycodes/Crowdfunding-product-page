const bookmarkBtn = document.querySelector('.wrapper-card1-btn2');
const logocol = document.querySelector('.fill');
const openModal = document.querySelector('.wrapper-card1-btn1');
const selectionModal = document.getElementById('modal');
const closeModal = document.querySelector('.closeBtn');
const closeWrapper = document.querySelector('.wrapper');
const modalBody = document.querySelector('.modal-body');
const bottomModal = document.querySelector('.bottom-modal');
const bottomModal2 = document.querySelector('.bottom-modal2');
const bottomModal3 = document.querySelector('.bottom-modal3');
const modalSelected = document.querySelector('.selectedModal');
const SecModalSelected = document.querySelector('.selectedModal2');
const ThirdModalSelected = document.querySelector('.selectedModal3');
const headerPledge = document.getElementById('modalPledge');
const pledgeDesc = document.getElementById('descPledge');
const headerPledge2 = document.getElementById('modalPledge2');
const pledgeDesc2 = document.getElementById('descPledge2');
const headerPledge3 = document.getElementById('modalPledge3');
const pledgeDesc3 = document.getElementById('descPledge3');
const cardPledge = document.getElementById('pledgeCard');
const cardPledge2 = document.getElementById('pledgeCard2');
const cardPledge3 = document.getElementById('pledgeCard3');
const successModal2 = document.getElementById('showSuccess2');
const successModal3 = document.getElementById('showSuccess3');
const showSuccess = document.getElementById('thankYouSection');
const rewardModal = document.getElementById('rewardPledge');
const showReward = document.querySelector('.bamboo-pl-card');
const rewardClosed = document.getElementById('closeReward');
const rewardModal2 = document.getElementById('rewardPledge2');
const showReward2 = document.querySelector('.bamboo-pl-card2');
const rewardClosed2 = document.getElementById('closeReward2');
const openNavbar = document.querySelector('.navbarBtn');
const navbar = document.querySelector('.navbar');
const closeNav = document.querySelector('.closeMenu');
const closeSuccess = document.getElementById('successBtn');
const backerNumber = document.getElementById('numberBacked');
const bambooInput = document.getElementById('bamboo-input');
const totalBackers = document.getElementById('totalBacked');
const totalDays = document.getElementById('days')

// Change bookmark content
bookmarkBtn.addEventListener('click', changeBookmarkContent);

function changeBookmarkContent(e) {
    bookmarkBtn.textContent = 'bookmarked';
    bookmarkBtn.style.color = '#1c2625';
    logocol.style.fill = '#147b74';
    logocol.style.cursor = 'pointer'
    logocol.style.opacity = '1'
    bookmarkBtn.style.filter = 'brightness(2.65) sepia(0.42) hue-rotate(129deg) saturate(5)';
}

// Unmark bookkark
logocol.addEventListener('click', unmark);

function unmark(e) {
    bookmarkBtn.textContent = 'bookmark';
    logocol.style.color = '#7a7a7a';
    logocol.style.fill = '#7a7a7a';
    bookmarkBtn.style.filter = 'none'
}

// MODAL

// Open Modal
openModal.addEventListener('click', openSelectModal)

function openSelectModal(e) {
    selectionModal.style.display = 'block';
    closeWrapper.style.display = 'none';
    selectionModal.style.animation = 'transform: translate(-50%, -50%) scale(0)'
}

// Close Modal
closeModal.addEventListener('click', closeSelectModal)

function closeSelectModal(e) {
    selectionModal.style.display = 'none';
    closeWrapper.style.display = 'grid';
    selectionModal.style.animation = 'transform: translate(-50%, -50%) scale(0)'
}

// Bottom Modal 1

// Open Bottom modal
headerPledge.addEventListener('click', openBottomModal)

function openBottomModal(e) {
    modalSelected.style.display = 'block';
    bottomModal.style.display = 'none';
    bottomModal.style.animation = 'animation: 0.25s ease-in-out 0s 1 normal forwards running open';
    cardPledge.style.border = '1px solid #7a7a7a';
}

// Close Bottom modal
pledgeDesc.addEventListener('click', closeBottomModal)

function closeBottomModal(e) {
    modalSelected.style.display = 'block';
    bottomModal.style.display = 'flex';
    bottomModal.style.animation = 'animation: 0.25s ease-in-out 0s 1 normal forwards running close';
    cardPledge.style.border = '2px solid #147b74'
}


// Bottom Modal 2

// Open Bottom modal
headerPledge2.addEventListener('click', SecondBottomModal)

function SecondBottomModal(e) {
    SecModalSelected.style.display = 'block';
    bottomModal2.style.display = 'none';
    bottomModal2.style.animation = 'animation: 0.25s ease-in-out 0s 1 normal forwards running open';
    cardPledge2.style.border = '1px solid #7a7a7a';
}

// Close Bottom modal
pledgeDesc2.addEventListener('click', SecondClosingBottomModal)

function SecondClosingBottomModal(e) {
    SecModalSelected.style.display = 'block';
    bottomModal2.style.display = 'flex';
    bottomModal2.style.animation = 'animation: 0.25s ease-in-out 0s 1 normal forwards running close';
    cardPledge2.style.border = '2px solid #147b74'
}

// Bottom Modal 3

// Open Bottom modal
headerPledge3.addEventListener('click', ThirdBottomModal)

function ThirdBottomModal(e) {
    ThirdModalSelected.style.display = 'block';
    bottomModal3.style.display = 'none';
    bottomModal3.style.animation = 'animation: 0.25s ease-in-out 0s 1 normal forwards running open';
    cardPledge3.style.border = '1px solid #7a7a7a';
}

// Close Bottom modal
pledgeDesc3.addEventListener('click', ThirdClosingBottomModal)

function ThirdClosingBottomModal(e) {
    ThirdModalSelected.style.display = 'block';
    bottomModal3.style.display = 'flex';
    bottomModal3.style.animation = 'animation: 0.25s ease-in-out 0s 1 normal forwards running close';
    cardPledge3.style.border = '2px solid #147b74'
}

// Thank You Session

successModal2.addEventListener('click', openThankYou)

function openThankYou(e) {
    showSuccess.style.display = 'flex';
    e.preventDefault();    
}

successModal3.addEventListener('click', openThankYou)

function openThankYou(e) {
    showSuccess.style.display = 'flex';
    e.preventDefault();    
}


// Close success modal 
closeSuccess.addEventListener('click', successClosed);

function successClosed(e) {
    showSuccess.style.display = 'none';
    selectionModal.style.display = 'none';
    closeWrapper.style.display = 'block'
    backerNumber.textContent = ''
    backerNumber.textContent = 89914 + bambooInput.value;
    // Number(backerNumber.innerHTML) + Number(bambooInput.value);
    totalBackers.innerHTML++;
    totalDays.textContent = 5;
}

// REWARD MODAL

// Open First Reward
rewardModal.addEventListener('click', openRewardModal)

function openRewardModal(e) {
    showReward.style.display = 'flex'
    rewardModal.style.boxShadow = '0 0 0 0.25rem rgb(13 110 253 / 25%)';
}

// Close First Reward
rewardClosed.addEventListener('click', closeRewardModal)

function closeRewardModal(e) {
    showReward.style.display = 'none'
    rewardModal.style.boxShadow = 'none';
}

// Open Second Reward
rewardModal2.addEventListener('click', openSecRewardModal)

function openSecRewardModal(e) {
    showReward2.style.display = 'flex'
    rewardModal2.style.boxShadow = '0 0 0 0.25rem rgb(13 110 253 / 25%)';
}

// Close Second Reward
rewardClosed2.addEventListener('click', closeSecRewardModal)

function closeSecRewardModal(e) {
    showReward2.style.display = 'none'
    rewardModal2.style.boxShadow = 'none';
}

// Open Navbar
openNavbar.addEventListener('click', openNavBar);

function openNavBar(e) {
   navbar.style.display = 'flex'
   closeNav.style.display = 'flex'
   openNavbar.style.display = 'none'
}

// Close Navbar
closeNav.addEventListener('click', closeNavBar);

function closeNavBar(e) {
   navbar.style.display = 'none'
   closeNav.style.display = 'none'
   openNavbar.style.display = 'flex'
}

// CALCULATE BACKERS
