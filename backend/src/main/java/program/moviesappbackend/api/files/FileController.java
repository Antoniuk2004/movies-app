package program.moviesappbackend.api.files;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.io.InputStream;

@Controller
@RequestMapping("/files")
public class FileController {
    @GetMapping("/covers/{id}")
    public ResponseEntity<InputStreamResource> getPoster(@PathVariable String id) throws IOException {
        return getFile("static/covers/", id);
    }

    @GetMapping("/banners/{id}")
    public ResponseEntity<InputStreamResource> getBanner(@PathVariable String id) throws IOException {
        return getFile("static/banners/", id);
    }

    @GetMapping("/actors/{id}")
    public ResponseEntity<InputStreamResource> getActors(@PathVariable String id) throws IOException {
        return getFile("static/actors/", id);
    }

    @GetMapping("/directors/{id}")
    public ResponseEntity<InputStreamResource> getDirectors(@PathVariable String id) throws IOException {
        return getFile("static/directors/", id);
    }

    private ResponseEntity<InputStreamResource> getFile(String folder, String id) throws IOException {
        String filePath = folder + id;
        ClassPathResource resource = new ClassPathResource(filePath);

        if (!resource.exists()) {
            return ResponseEntity.notFound().build();
        }

        InputStream inputStream = resource.getInputStream();

        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + id);
        headers.add(HttpHeaders.CONTENT_TYPE, MediaType.IMAGE_JPEG_VALUE);

        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.IMAGE_JPEG)
                .body(new InputStreamResource(inputStream));
    }
}
