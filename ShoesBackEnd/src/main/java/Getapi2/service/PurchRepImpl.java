package Getapi2.service;

import com.example.Getapi2.Getapi2.repo.PurchRep;
import com.example.Getapi2.Getapi2.model.Purchase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public  class PurchRepImpl  {


    @Autowired
    PurchRep w;


    public String insertwpurch( Purchase f)
    {
        w.save(f);

        return "Saved";

    }


}
