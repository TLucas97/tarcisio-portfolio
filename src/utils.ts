import { toast } from '@zerodevx/svelte-toast';

export const activateToast = (type: string, message: string) => {
	if (type === 'success') {
		toast.push(message, {
			theme: {
				'--toastColor': 'mintcream',
				'--toastBackground': 'rgba(72,187,120,0.9)',
				'--toastBarHeight': 0
			}
		});
	} else if (type === 'error') {
		toast.push(message, {
			theme: {
				'--toastColor': 'mintcream',
				'--toastBackground': 'rgba(220,38,38,0.9)',
				'--toastBarHeight': 0
			}
		});
	} else if (type === 'warning') {
		toast.push(message, {
			theme: {
				'--toastColor': 'mintcream',
				'--toastBackground': 'rgba(255,193,7,0.9)',
				'--toastBarHeight': 0
			}
		});
	}
};
