export default function Share() {
  async function onShare() {
    const currentUrl = window.location.href;

    try {
      const blob = await fetch(
        `/api/capture?url=${encodeURIComponent(currentUrl)}&width=549&height=978&disableAnimations=true`
      ).then((res) => res.blob());

      // Panggil fungsi untuk mengunduh file
      downloadFile(blob);

      const filesArray = [
        new File([blob], `screenshot.png`, {
          type: blob.type,
        }),
      ];

      const shareData = {
        files: filesArray,
        title: `This is the screenshot`,
      };

      // Check if navigator.share is supported
      if (navigator.share) {
        // Share the file using navigator.share
        await navigator.share(shareData);
      } else {
        // Provide an alternative if sharing is not supported
        alert('Sharing is not supported on your device. You can download the screenshot instead.');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle other errors here
    }
  }

  // Fungsi untuk mengunduh file
  function downloadFile(blob: Blob) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "screenshot.png";
  
    // Simulasikan klik pada elemen anchor untuk mengunduh file
    a.click();
  
    // Hapus elemen anchor setelah proses unduhan
    window.URL.revokeObjectURL(url);
  }

  return (
    <>
      <button
        className="text-white bg-[#3461FF] rounded-xl p-2 xl:py-2 xl:px-3 xl:text-lg lg:text-xs lg:p-2 md:p-1 md:text-xs md:rounded-1 md:mx-0 sm:text-xs"
        onClick={onShare}
      >
        Share
      </button>
    </>
  );
}
