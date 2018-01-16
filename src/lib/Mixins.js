

export const ShowHide = (superclass) => class extends superclass {
    show() {
        this.$clip.classList.remove('hidden');
        this.$clip.classList.add('showing');
    }

    hide() {
        this.$clip.classList.remove('showing');
        this.$clip.classList.add('hidden');
    }
}
