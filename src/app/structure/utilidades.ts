import {CustomRequest} from "./customRequest";

export class Utilidades {

  public static createRequest(request: CustomRequest): FormData {
    let formData = new FormData();
    formData.append("data",btoa(JSON.stringify(request)));
    return formData;
  }

  public static decodeRequest(requestAsB64: any): any {
    let formData: FormData;
    formData = JSON.parse(atob(requestAsB64));
    return formData;
  }

  public static ValidarToken(resp : any){

    if (resp['f_key'] == '1'){
      return true;
    }
    else {
      return false;
    }
  }

  public static GetKey(){
    return "f570d2f80d6dbd9c639f83a5dcd29d41";
  }
}
