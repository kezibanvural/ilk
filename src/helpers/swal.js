import Swal from "sweetalert2";

export const swalAlert = (message, type) => {
	return new Promise((resolve) => {
	  Swal.fire({
		title: message,
		icon: type,
		confirmButtonText: 'OK'
	  }).then((result) => {
		if (result.isConfirmed) {
		  resolve(true);
		} else {
		  resolve(false);
		}
	  });
	});
  };

export const swalConfirm = (
	title,
	icon = "question",
	text = "",
	confirmButtonText = "Yes"
) => {
	// icon: error, success, info, warning, question
	return Swal.fire({
		title,
		text,
		icon,
		showCancelButton: true,
		confirmButtonText,
	});
};

export const swalToast = (title, icon = "success") => {
	const Toast = Swal.mixin({
		toast: true,
		position: "top-end",
		showConfirmButton: false,
		timer: 2500,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.onmouseenter = Swal.stopTimer;
			toast.onmouseleave = Swal.resumeTimer;
		},
	});

	Toast.fire({
		icon,
		title,
	});
};
