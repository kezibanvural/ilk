import { useEffect } from 'react';
import Swal from 'sweetalert2';

const useSwalAlert = (trigger) => {
  useEffect(() => {
    if (trigger) {
      Swal.fire({
        title: trigger.title || 'Default Title',
        text: trigger.text || 'Default Text',
        icon: trigger.icon || 'info',
      });
    }
  }, [trigger]);

  return null;
};

export default useSwalAlert;


