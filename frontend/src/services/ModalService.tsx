const ModalService = {
  on(event: any, callback: any) {
    document.addEventListener(event, (e) => callback(e.detail));
  },
  open(component: any, props = {}) {
    document.dispatchEvent(new CustomEvent('open', { detail: { component, props } }));
  },
};

export default ModalService;