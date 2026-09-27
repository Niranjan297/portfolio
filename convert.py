import fitz
import sys
import os

pdf_files = {
    r"C:\Users\kalug\Downloads\gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_68d1569ab4de1e60000ff6d9_1785748368081_completion_certificate.png.pdf": "tata.png",
    r"C:\Users\kalug\Downloads\E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_68d1569ab4de1e60000ff6d9_1785726819459_completion_certificate.pdf": "deloitte.png",
    r"C:\Users\kalug\Downloads\MJK2K9L38R.pdf": "openai.png",
    r"C:\Users\kalug\Downloads\file_00000000422071faa920f21c54cb2766.png": "tata.png", # Fallback if it's an image
    r"C:\Users\kalug\Downloads\file_0000000068307208b4ad8cfb27312a38.png": "openai.png" # Fallback if it's an image
}

for pdf_path, output_name in pdf_files.items():
    if not os.path.exists(pdf_path):
        continue
        
    try:
        out_path = os.path.join(r"C:\Users\kalug\Downloads\personal\portfolio\public\certificates", output_name)
        
        if pdf_path.endswith('.pdf'):
            doc = fitz.open(pdf_path)
            page = doc.load_page(0)
            pix = page.get_pixmap(dpi=150)
            pix.save(out_path)
        else:
            # If it's already an image, just copy it
            import shutil
            shutil.copy(pdf_path, out_path)
            
        print(f"Saved {output_name} from {os.path.basename(pdf_path)}")
    except Exception as e:
        print(f"Error processing {pdf_path}: {e}")

