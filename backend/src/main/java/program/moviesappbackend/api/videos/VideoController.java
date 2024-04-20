package program.moviesappbackend.api.videos;

import lombok.SneakyThrows;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Controller
public class VideoController {

    @SneakyThrows
    @GetMapping("/api/videos/{videoId}")
    public ResponseEntity<byte[]> getVideo(@PathVariable String videoId) {
        // Load the video file from the resources directory
        Resource resource = new ClassPathResource("static/videos/" + videoId + ".mp4");
        Path videoPath = Paths.get(resource.getURI());

        // Read the video file's contents
        byte[] videoBytes = Files.readAllBytes(videoPath);

        // Set headers to indicate content type and length
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        headers.setContentLength(videoBytes.length);

        // Return the video file as a ResponseEntity
        return ResponseEntity.ok()
                .headers(headers)
                .body(videoBytes);
    }
}
