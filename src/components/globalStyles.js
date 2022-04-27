import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: color 0.50s linear, background-color 0.50s linear, background 0.50s linear;
  }

  .page-view-card {
    background-color: ${({ theme }) => theme.dp04};
  }

  .tab-item {
    background-color: ${({ theme }) => theme.dp02};
  }

  .btn {
    background-color: white;
  }

  .btn--submit {
    color: white;
    background-color: ${({ theme }) => theme.btnStandard};
    border: 4px solid ${({ theme }) => theme.btnStandard};

    &:hover {
      background-color: ${({ theme }) => theme.dp24};
      opacity: 1;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25); 
      color: ${({ theme }) => theme.btnStandard}
    }
  }

  .btn--interact {
    mix-blend-mode: screen;
    opacity: .60;

    &:hover {
      opacity: 1;
  }
  }

  .invalidClick {
    background-color: ${({ theme }) => theme.disabled};
    border: 4px solid ${({ theme }) => theme.disabled};
    color: white;
    opacity: 1;

    &:hover {
      opacity: 1;
      color: white;
      background-color: ${({ theme }) => theme.disabled};
      border: 4px solid ${({ theme }) => theme.disabled};
      box-shadow: none;
      cursor: auto;
  }
  }

.delete-icon-container {
  border: 2px solid ${({ theme }) => theme.delete};
  background: ${({ theme }) => theme.delete};

  .icon {
    color: white;
  }

  &:hover {
    background: ${({ theme }) => theme.dp24};

    .icon {
      color: ${({ theme }) => theme.delete};
    }
  }
}

.edit-icon-container {
  border: 2px solid ${({ theme }) => theme.edit};
  background: ${({ theme }) => theme.edit};

  .icon {
    color: white;
  }

  &:hover {
    background: ${({ theme }) => theme.dp24};

    .icon {
      color: ${({ theme }) => theme.edit};
    }
  }
}

.notify-icon-container {
  border: 2px solid ${({ theme }) => theme.notify};
  background: ${({ theme }) => theme.notify};

  .icon {
    color: white;
  }

  &:hover {
    background: ${({ theme }) => theme.dp24};

    .icon {
      color: ${({ theme }) => theme.notify};
    }
  }
}

.check-box {
  border: ${({ theme }) => theme.text} 2px solid;
}

.alt-row {
  background-color: ${({ theme }) => theme.altRow};
}

tr {
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.rowHover};
  }
}


.content-row {
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.rowHover};
  }
  `;
