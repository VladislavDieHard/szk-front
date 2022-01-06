export const resizeContentOnMount = (context) => {
    console.log(context.resize)
    if (context.resize.isDesktop) {
        context.$refs.page.classList.remove('tablet')
        context.$refs.page.classList.remove('mobile')
        context.$refs.page.classList.add('desktop')
    } else if (context.resize.isTablet) {
        context.$refs.page.classList.remove('desktop')
        context.$refs.page.classList.remove('mobile')
        context.$refs.page.classList.add('tablet')
    } else {
        context.$refs.page.classList.remove('desktop')
        context.$refs.page.classList.remove('tablet')
        context.$refs.page.classList.add('mobile')
    }
}