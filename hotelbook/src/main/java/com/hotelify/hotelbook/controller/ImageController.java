package com.hotelify.hotelbook.controller;

import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Files;

@RestController
@RequestMapping("/images")
public class ImageController {

    private final ResourceLoader resourceLoader;

    public ImageController(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    @GetMapping("/{filename:.+}")
    public ResponseEntity<Resource> getMedia(@PathVariable String filename) {
        Resource resource = resourceLoader.getResource("classpath:/static/images/" + filename);

        String contentType = getContentType(resource);
        System.out.println("ini adalah contentType : " + contentType);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE, contentType)
                .body(resource);
    }
    
    private String getContentType(Resource resource) {
        try {
            return Files.probeContentType(resource.getFile().toPath());
        } catch (IOException e) {
            String filename = resource.getFilename();
            if (filename != null) {
                if (filename.endsWith(".jpg") || filename.endsWith(".jpeg")) {
                    return "image/jpeg";
                } else if (filename.endsWith(".png")) {
                    return "image/png";
                } else if (filename.endsWith(".mp4")) {
                    return "video/mp4";
                }
            }
        }
        return "application/octet-stream";
    }
}
