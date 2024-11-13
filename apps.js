.navbar(
    background: url("https://raw.githubusercontent.com/Smit-Prajapati/QuickNews/main/images/world_background_orange.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 65%;
)
.navbar-top {
    background: linear-gradient;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0px;

      .logo{
        width: 150px;
      }
      
      .search-bar {
        display: flex;
        align-items: stretch;
        width: 25%;
        border-left: 5px solid $blue-color;

        input {
          padding: 8px;
          width: 100%;
          border: none;
          border: 2px solid transparent;
          transition: all $transition-time ease-in-out;

          &:focus {
            border: 2px solid $blue-color;
            outline: none;
          }

        }
        
        button {
          background: $blue-color;
          border: none;
          padding: 8px;
          transition: all $transition-time ease-in-out;

          &:hover {
            background: darken($blue-color, 5%);
          }

          i {
            color: white;
            font-size: 20px;
          }
        }
      }
      .nav-icons {
        justify-content: end;
        gap: 20px;
        display: none;
        i {
          color: white;
          font-size: 25px;
        }
      }
    }
  }


.navbar-Button{

}
.logo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;

    .logo{
      width: 150px;
    }
    
    .search-bar {
      display: flex;
      align-items: stretch;
      width: 25%;
      border-left: 5px solid $blue-color;

      input {
        padding: 8px;
        width: 100%;
        border: none;
        border: 2px solid transparent;
        transition: all $transition-time ease-in-out;