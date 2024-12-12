// Função para abrir o modal
export function openModal() {
    const modal = document.getElementById('editDoctorModal');
    modal.showModal();
}

// Função para fechar o modal
export function closeModal() {
    const modal = document.getElementById('editDoctorModal');
    modal.close();
}

// Função para exibir um toast
export function showToast(message, type) {
    const toast = document.querySelector('.toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}