package com.hotelify.hotelbook.service;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.hotelify.hotelbook.exception.OurException;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class LocalStorageService {
    
    @Value("${upload.dir}")
    private String uploadDir;

    public String saveImageToLocal(MultipartFile photo) {
        try {
            String fileName = photo.getOriginalFilename();
            Path filePath = Paths.get(uploadDir + File.separator + fileName);
            Files.copy(photo.getInputStream(), filePath);
            return fileName;

        } catch (IOException e) {
            e.printStackTrace();
            throw new OurException("Unable to upload image to local storage");
        }
    }
}
