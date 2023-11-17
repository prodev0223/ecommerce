export interface IActiveModal {
    type: string;
    open: boolean;
  }

export interface IModalProps {
    activeModal:IActiveModal 
    handleCloseModal:() => any
  }