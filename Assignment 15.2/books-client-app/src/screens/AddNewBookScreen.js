import React from 'react';

const AddNewBookScreen=()=>{
    
    
    return(
        <div className="BookHome">
            <h1>Add New Book</h1>
        
        <form>
        <fieldset>
          <div class="mb-3">
            <label for="disabledTextInput" class="form-label">ISBN</label>
            <input type="text" id="disabledTextInput" class="form-control" placeholder="isbn"/>
          </div>
          <div class="mb-3">
            <label for="disabledTextInput" class="form-label">TITLE</label>
            <input type="text" id="disabledTextInput" class="form-control" placeholder="title"/>
          </div>
          <div class="mb-3">
            <label for="disabledTextInput" class="form-label">AUTHOR</label>
            <input type="text" id="disabledTextInput" class="form-control" placeholder="author"/>
          </div>
          <div class="mb-3">
            <label for="disabledTextInput" class="form-label">PRICE</label>
            <input type="text" id="disabledTextInput" class="form-control" placeholder="0"/>
          </div>
          <div class="mb-3">
            <label for="disabledTextInput" class="form-label">COVER</label>
            <input type="text" id="disabledTextInput" class="form-control" placeholder="Cover"/>
          </div>
          <div class="mb-3">
            <label for="disabledTextInput" class="form-label">DESCRIPTION</label>
            <input type="text" id="disabledTextInput" class="form-control" placeholder="details"/>
          </div>
          
          <button type="submit" class="btn btn-primary">Save</button>
        </fieldset>
      </form>
      </div>
        
    )
}
export default AddNewBookScreen;